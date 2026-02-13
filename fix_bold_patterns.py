#!/usr/bin/env python3
"""
**단어:** 패턴을 **단어**로 변경하는 스크립트
YAML 파서가 ** 를 alias로 인식하는 문제 해결
"""
import os
import re
from pathlib import Path

def fix_bold_patterns(file_path):
    """**단어:** 패턴 수정"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # **단어:** 패턴을 찾아서 **단어**로 변경 (콜론을 밖으로)
    # 예: **설명:** → **설명**:
    pattern = r'\*\*([^*]+?):\*\*'
    new_content = re.sub(pattern, r'**\1**:', content)

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
        if fix_bold_patterns(md_file):
            print(f"✓ {md_file.relative_to(base_dir)}")
            count += 1

    print(f"\n{count}개 파일 수정 완료!")

if __name__ == '__main__':
    main()
