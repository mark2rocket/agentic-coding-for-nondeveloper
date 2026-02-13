#!/usr/bin/env python3
"""
한글 파일명을 영어로 변경하고 navigation.json도 업데이트하는 스크립트
"""
import os
import shutil
import json

# 파일명 매핑
FILE_MAPPINGS = {
    # basics
    'guide/basics/개발을-돕는-도구들-tools-tech.md': 'guide/basics/tools-and-tech.md',
    'guide/basics/데이터와-소통-data-communication.md': 'guide/basics/data-communication.md',
    'guide/basics/서비스의-기본-구조-structure.md': 'guide/basics/service-structure.md',
    'guide/basics/세상에-내보내기-deploy.md': 'guide/basics/deploy.md',
    'guide/basics/작업-관리와-수정-workflow.md': 'guide/basics/workflow.md',
    'guide/basics/화면을-만드는-재료-interface.md': 'guide/basics/interface.md',

    # tool-guide
    'guide/tool-guide/나에게-맞는-도구는.md': 'guide/tool-guide/choosing-tools.md',
    'guide/tool-guide/비용-비교.md': 'guide/tool-guide/cost-comparison.md',
    'guide/tool-guide/선택-플로우차트.md': 'guide/tool-guide/selection-flowchart.md',

    # tools
    'guide/tools/안티그래비티-antigravity.md': 'guide/tools/antigravity.md',
    'guide/tools/오-마이-클로드코드-oh-my-claude-code.md': 'guide/tools/oh-my-claude-code.md',
    'guide/tools/클로드코드-claude-code.md': 'guide/tools/claude-code.md',
    'guide/tools/클로드코드-플러그인-plugins.md': 'guide/tools/plugins.md',
    'guide/tools/클로드코드-활용-레퍼런스.md': 'guide/tools/claude-code-reference.md',

    # faq
    'guide/faq/고급-질문.md': 'guide/faq/advanced-questions.md',
    'guide/faq/기초-질문.md': 'guide/faq/basic-questions.md',
    'guide/faq/도구-선택.md': 'guide/faq/tool-selection.md',

    # orchestration
    'guide/orchestration/개념-concept.md': 'guide/orchestration/concept.md',
    'guide/orchestration/도구와-구현-implementation.md': 'guide/orchestration/implementation.md',
    'guide/orchestration/복합-시스템-구축-integrated-system.md': 'guide/orchestration/integrated-system.md',
    'guide/orchestration/실제-작동-시퀀스-예시.md': 'guide/orchestration/sequence-example.md',
    'guide/orchestration/에이전트-오케스트레이션-아키텍처.md': 'guide/orchestration/architecture.md',
    'guide/orchestration/프로세스-process.md': 'guide/orchestration/process.md',

    # process
    'guide/process/검증-및-수정-iteration.md': 'guide/process/iteration.md',
    'guide/process/기획-및-요구사항-정의-ideation.md': 'guide/process/ideation.md',
    'guide/process/단계별-소요-시간-평균.md': 'guide/process/time-estimation.md',
    'guide/process/생성-및-구현-generation.md': 'guide/process/generation.md',
    'guide/process/프로세스-플로우-다이어그램.md': 'guide/process/process-flow.md',

    # troubleshooting
    'guide/troubleshooting/자주-발생하는-문제와-해결법.md': 'guide/troubleshooting/common-issues.md',

    # tutorials
    'guide/tutorials/튜토리얼-1-첫-웹사이트-만들기-30분.md': 'guide/tutorials/tutorial-1-first-website.md',
    'guide/tutorials/튜토리얼-2-mcp로-github-연동하기-20분.md': 'guide/tutorials/tutorial-2-github-mcp.md',
    'guide/tutorials/튜토리얼-3-subagent로-복잡한-프로젝트-60분.md': 'guide/tutorials/tutorial-3-subagent-project.md',
    'guide/tutorials/튜토리얼-4-hook으로-자동화하기-15분.md': 'guide/tutorials/tutorial-4-hooks.md',
    'guide/tutorials/튜토리얼-5-ultrawork로-병렬-개발-45분.md': 'guide/tutorials/tutorial-5-ultrawork.md',
}

def rename_files(base_path):
    """파일명 변경"""
    print("=== 파일명 변경 시작 ===")
    for old_path, new_path in FILE_MAPPINGS.items():
        old_full = os.path.join(base_path, old_path)
        new_full = os.path.join(base_path, new_path)

        if os.path.exists(old_full):
            shutil.move(old_full, new_full)
            print(f"✓ {old_path} → {new_path}")
        else:
            print(f"✗ 파일 없음: {old_full}")
    print()

def update_navigation(nav_path):
    """navigation.json 업데이트"""
    print("=== navigation.json 업데이트 시작 ===")

    with open(nav_path, 'r', encoding='utf-8') as f:
        nav = json.load(f)

    # slug 변경 매핑
    slug_mapping = {
        old.replace('.md', ''): new.replace('.md', '')
        for old, new in FILE_MAPPINGS.items()
    }

    def update_slug(item):
        """재귀적으로 slug 업데이트"""
        if 'slug' in item and item['slug']:
            if item['slug'] in slug_mapping:
                old_slug = item['slug']
                item['slug'] = slug_mapping[old_slug]
                print(f"  slug 변경: {old_slug} → {item['slug']}")

        if 'children' in item:
            for child in item['children']:
                update_slug(child)

    # 모든 섹션과 아이템 순회
    for section in nav['sections']:
        for item in section['items']:
            update_slug(item)

    # 저장
    with open(nav_path, 'w', encoding='utf-8') as f:
        json.dump(nav, f, ensure_ascii=False, indent=2)

    print(f"✓ navigation.json 업데이트 완료\n")

if __name__ == '__main__':
    # 경로 설정
    base_dir = os.path.dirname(os.path.abspath(__file__))
    content_dir = os.path.join(base_dir, 'content')
    nav_file = os.path.join(content_dir, 'navigation.json')

    # 실행
    rename_files(content_dir)
    update_navigation(nav_file)

    print("=== 완료 ===")
    print(f"총 {len(FILE_MAPPINGS)}개 파일 처리됨")
