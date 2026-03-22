# 이지세이프(EASY SAFE) 랜딩페이지 구현 계획

Supanova 디자인 스타일(Tailwind CSS, 글래스모피즘, Pretendard 폰트, Iconify Solar 아이콘 기반)을 사용하여 이지세이프의 프리미엄 랜딩페이지를 제작합니다.

## User Review Required

> [!IMPORTANT]
> 본 디자인은 Supanova 스킬 지침에 따라 **Tailwind CSS (CDN)** 및 **Pretendard 폰트**를 사용합니다. 결과물은 서버나 프레임워크 없이 단독 실행 가능한 `index.html` 형태로 출력됩니다.

- **시각적 스타일**: 다크/라이트 혼합 글래스모피즘(유리 질감), 부드러운 스크롤 애니메이션, 고급스러운 그라데이션 적용.
- **이미지 및 에셋**: "안전하고 쉬운 현장 관리" 테마를 돋보이게 하는 고품질 텍스처와 아이콘 사용 (사전 생성 완료).

## Proposed Changes

### [Web Application]
요약: 반응형 레이아웃과 감각적인 상호작용 요소가 들어간 원페이지(Single-page) 구조.

#### [NEW] [index.html](file:///C:/Works/EASYSAFE%20v2.0/index.html)
- **도입부 (Intro Section)**: "사업주는 EASY하게, 근로자는 SAFE하게" 슬로건과 임팩트 있는 카피로 구성된 히어로 영역.
- **스마트 도구 (Smart Tools Section)**: 보이스 입력, 시니어 UI, 미니게임, 카카오 알림톡 등 4가지 기능을 아름다운 카드 그리드로 표현.
- **법령 준수 (Compliance Section)**: 이지세이프의 단계별 사용만으로 산업안전보건법 및 중대재해처벌법이 자동으로 지켜지는 흐름을 도식화.
- **도입 사례 (Case Study Section)**: 총 481명의 근로자가 사용 중인 전국 스타필드 통합 관리 사례를 신뢰감 있게 배치.
- **도입 안내 (Support & Onboarding)**: 심플한 5단계 시스템 세팅 과정 안내와 고객 지원 헬프데스크 정보 안내.
- **푸터 (Footer)**: 문의 번호 및 앱 다운로드(구글 플레이, 앱 스토어) 안내 영역.

### 생성된 에셋 목록
- ![히어로 이미지](C:\Users\ihnse\.gemini\antigravity\brain\3bc94483-7fdb-4afc-8905-996ebc7dc3cb\hero_safety_app_1774078355662.png)
- ![음성 입력](C:\Users\ihnse\.gemini\antigravity\brain\3bc94483-7fdb-4afc-8905-996ebc7dc3cb\voice_input_icon_1774078380962.png)
- ![시니어 UI](C:\Users\ihnse\.gemini\antigravity\brain\3bc94483-7fdb-4afc-8905-996ebc7dc3cb\senior_ui_accessibility_1774078454755.png)
- ![미니게임](C:\Users\ihnse\.gemini\antigravity\brain\3bc94483-7fdb-4afc-8905-996ebc7dc3cb\minigame_tbm_1774078407692.png)
- ![카카오 알림톡](C:\Users\ihnse\.gemini\antigravity\brain\3bc94483-7fdb-4afc-8905-996ebc7dc3cb\kakao_alert_notification_1774078559043.png)


#### [NEW] [index.css](file:///C:/Works/EASYSAFE%20v2.0/index.css) (필요 시)
- Tailwind 커스텀 클래스로 쉽게 구현하기 어려운 정교한 애니메이션(키프레임) 및 추가 스타일.

## Verification Plan

### Automated Tests
- 브라우저 콘솔 오류 점검 및 기본 접근성 검사 실시.

### Manual Verification
1.  **시각적 검토**: 브라우저에서 `index.html` 파일을 열고 타이포그래피, 레이아웃, 컬러를 점검.
2.  **반응형(모바일) 테스트**: 모바일, 태블릿, PC 해상도별로 디스플레이 이상 유무 점검.
3.  **인터랙션 스크롤**: 마우스 스크롤에 따른 부드러운 등장 효과 및 버튼 호버(마우스 올림) 애니메이션 테스트.
4.  **기획안 검증**: 요청하신 기획안의 모든 메시지가 페이지 내에 올바르게 배치되었는지 확인.
