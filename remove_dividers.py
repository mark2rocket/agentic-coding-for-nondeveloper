#!/usr/bin/env python3
"""
h2 앞의 구분선(---) 제거 스크립트
"""
import os
import re
from pathlib import Path

def remove_h2_dividers(file_path):
    """h2 앞의 --- 제거"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # --- 다음에 빈 줄이 있고 그 다음 ## 이 오는 패턴 찾기
    # 패턴: \n---\n\n## 또는 \n\n---\n\n##
    pattern = r'\n\n?---\n\n(## )'

    # --- 제거하고 ## 만 남기기
    new_content = re.sub(pattern, r'\n\n\1', content)

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
        if remove_h2_dividers(md_file):
            print(f"✓ {md_file.relative_to(base_dir)}")
            count += 1

    print(f"\n{count}개 파일에서 구분선 제거 완료!")

if __name__ == '__main__':
    main()
