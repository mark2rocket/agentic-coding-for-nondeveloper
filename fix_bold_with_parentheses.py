#!/usr/bin/env python3
"""
**단어 (설명)**: 패턴을 **단어 (설명):** 또는 리스트로 변경
"""
import os
import re
from pathlib import Path

def fix_patterns(file_path):
    """**단어 (...)**: 패턴 수정"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # **단어 (설명)**: 패턴을 리스트로 변경
    # 예: **사용 시기 (신호)**: → - **사용 시기 (신호)**:
    pattern = r'^(\*\*[^*]+?\([^)]+?\)\*\*):$'
    new_content = re.sub(pattern, r'- \1', content, flags=re.MULTILINE)

    # 또는 **단어**: 패턴도 리스트로 변경 (줄 시작만)
    pattern2 = r'^(\*\*[0-9]+\. [^*]+?\*\*):$'
    new_content = re.sub(pattern2, r'- \1', new_content, flags=re.MULTILINE)

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
        if fix_patterns(md_file):
            print(f"✓ {md_file.relative_to(base_dir)}")
            count += 1

    print(f"\n{count}개 파일 수정 완료!")

if __name__ == '__main__':
    main()
