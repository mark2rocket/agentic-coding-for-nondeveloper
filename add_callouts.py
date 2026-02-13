#!/usr/bin/env python3
"""
한줄 요약을 Callout 컴포넌트로 변경하는 스크립트
"""
import os
import re
from pathlib import Path

def add_callouts(file_path):
    """한줄 요약을 Callout으로 변경"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # **한줄 요약:** 내용 패턴 찾기
    pattern = r'\*\*한줄 요약:\*\* (.+?)(?=\n\n|\n<)'

    def replace_with_callout(match):
        text = match.group(1)
        return f'<Callout type="tip" title="💡 한줄 요약">\n{text}\n</Callout>'

    new_content = re.sub(pattern, replace_with_callout, content)

    # **핵심 인사이트:** 패턴도 변경
    pattern2 = r'\*\*핵심 인사이트:\*\*\n((?:(?:\d+\. .+?\n)+))'

    def replace_insight_with_callout(match):
        text = match.group(1).strip()
        return f'<Callout type="success" title="✨ 핵심 인사이트">\n{text}\n</Callout>'

    new_content = re.sub(pattern2, replace_insight_with_callout, new_content)

    if content != new_content:
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
        if add_callouts(md_file):
            print(f"✓ {md_file.relative_to(base_dir)}")
            count += 1

    print(f"\n{count}개 파일에 Callout 추가 완료!")

if __name__ == '__main__':
    main()
