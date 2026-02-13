#!/usr/bin/env python3
"""
frontmatter 종료 마커 확인 및 수정 스크립트
"""
import os
import re
from pathlib import Path

def fix_frontmatter(file_path):
    """frontmatter 종료 마커 확인 및 추가"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # frontmatter 패턴: ---로 시작하지만 ---로 끝나지 않는 경우
    # 올바른 패턴: ^---\n...\n---\n
    if not content.startswith('---\n'):
        return False

    # 첫 번째 ---부터 두 번째 ---까지 찾기
    lines = content.split('\n')
    first_delimiter = False
    second_delimiter_index = None

    for i, line in enumerate(lines):
        if line.strip() == '---':
            if not first_delimiter:
                first_delimiter = True
            elif first_delimiter and i > 0:
                second_delimiter_index = i
                break

    if second_delimiter_index is None:
        # frontmatter 종료 마커가 없음
        # order: 숫자 다음 줄에 --- 추가
        for i, line in enumerate(lines):
            if line.startswith('order:'):
                # order: 줄 다음에 --- 추가
                lines.insert(i + 1, '---')
                print(f"  ✓ frontmatter 종료 마커 추가 at line {i + 2}")
                new_content = '\n'.join(lines)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                return True

    return False

def main():
    """모든 마크다운 파일 처리"""
    base_dir = Path(__file__).parent / 'content' / 'guide'
    md_files = list(base_dir.rglob('*.md'))

    print(f"총 {len(md_files)}개 파일 처리 중...\n")

    count = 0
    for md_file in md_files:
        print(f"처리 중: {md_file.relative_to(base_dir)}")
        if fix_frontmatter(md_file):
            count += 1

    print(f"\n{count}개 파일에 frontmatter 종료 마커 추가 완료!")

if __name__ == '__main__':
    main()
