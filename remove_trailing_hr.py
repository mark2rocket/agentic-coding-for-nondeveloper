#!/usr/bin/env python3
"""
파일 끝의 --- 제거 스크립트
"""
import os
import re
from pathlib import Path

def remove_trailing_hr(file_path):
    """파일 끝의 --- 제거"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 파일 끝의 ---\n 제거
    new_content = re.sub(r'\n---\s*$', '', content)

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
        if remove_trailing_hr(md_file):
            print(f"✓ {md_file.relative_to(base_dir)}")
            count += 1

    print(f"\n{count}개 파일에서 끝 구분선 제거 완료!")

if __name__ == '__main__':
    main()
