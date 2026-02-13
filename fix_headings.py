#!/usr/bin/env python3
"""
헤딩 계층 구조 수정 스크립트
- 중복된 h3 제목 제거 (frontmatter title과 동일)
- h4를 h2로 변경
- 섹션 사이에 구분선 추가
"""
import os
import re
from pathlib import Path

def fix_markdown_file(file_path):
    """마크다운 파일의 헤딩 구조 수정"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # frontmatter에서 title 추출
    frontmatter_match = re.search(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not frontmatter_match:
        return False

    frontmatter = frontmatter_match.group(1)
    title_match = re.search(r'^title:\s*["\'](.+?)["\']', frontmatter, re.MULTILINE)
    if not title_match:
        return False

    title = title_match.group(1)

    # frontmatter 이후 내용
    body_start = frontmatter_match.end()
    body = content[body_start:]

    # 중복된 h3 제목 찾기 (frontmatter title과 동일한 경우)
    # ### {title}\n 형태를 찾아서 제거
    title_escaped = re.escape(title)
    duplicate_h3_pattern = rf'^### {title_escaped}\s*\n\n?'

    if re.search(duplicate_h3_pattern, body, re.MULTILINE):
        print(f"  ✓ 중복 제목 제거: {title}")
        body = re.sub(duplicate_h3_pattern, '', body, count=1, flags=re.MULTILINE)

    # h4 (####)를 h2 (##)로 변경
    # 단, 코드 블록 내부는 제외
    in_code_block = False
    lines = body.split('\n')
    modified_lines = []

    for line in lines:
        # 코드 블록 시작/종료 체크
        if line.strip().startswith('```'):
            in_code_block = not in_code_block

        # 코드 블록 외부에서만 h4 -> h2 변경
        if not in_code_block and line.startswith('#### '):
            # h4 앞에 구분선 추가 (첫 번째 제외)
            if modified_lines and any(l.strip() for l in modified_lines[-5:]):
                modified_lines.append('')
                modified_lines.append('---')
                modified_lines.append('')
            line = '## ' + line[5:]
            print(f"  ✓ h4 → h2 변경: {line[:50]}...")

        modified_lines.append(line)

    new_body = '\n'.join(modified_lines)

    # 최종 내용
    new_content = content[:body_start] + new_body

    # 파일 저장
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

def main():
    """모든 마크다운 파일 처리"""
    base_dir = Path(__file__).parent / 'content' / 'guide'

    # 모든 .md 파일 찾기
    md_files = list(base_dir.rglob('*.md'))

    print(f"총 {len(md_files)}개 파일 처리 중...\n")

    for md_file in md_files:
        print(f"처리 중: {md_file.relative_to(base_dir)}")
        try:
            fixed = fix_markdown_file(md_file)
            if not fixed:
                print("  ⚠ frontmatter 없음, 건너뜀")
        except Exception as e:
            print(f"  ✗ 에러: {e}")
        print()

    print("완료!")

if __name__ == '__main__':
    main()
