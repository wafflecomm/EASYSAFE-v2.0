# Design System Guide (이지세이프 v2.0) 🎨

이 문서는 **이지세이프(EASY SAFE)** 프로젝트의 시각적 정체성, UI 컴포넌트 스타일, 그리고 사용자 경험(UX) 원칙을 정의합니다. 본 프로젝트는 **Supanova 프리미엄 디자인 시스템**을 기반으로 구축되었습니다.

---

## 💎 Design Identity
> **"사업주는 EASY하게, 근로자는 SAFE하게"**

이지세이프의 디자인 목표는 복잡한 안전보건관리 데이터를 시각적으로 단순화하고, 누구나 쉽고(EASY) 안전하게(SAFE) 사용할 수 있도록 프리미엄 디지털 경험을 제공하는 것입니다.

### 핵심 컨셉
- **Glassmorphism**: 투명도와 블러 효과를 활용한 현대적이고 세련된 유리 질감 UI.
- **Ambient Glow**: 배경의 부드러운 발광 효과를 통해 공간감과 입체감 부여.
- **Inclusive UI**: 시니어 및 외국인 근로자를 배려한 높은 가독성과 직관적인 아이콘 시스템.

---

## 🎨 Color System

### Base Colors
- **Main Background**: `#0B0F19` (Deep Dark Blue)
- **Primary (Brand)**: `#22c55e` (Emerald Green) - 신뢰와 안전을 상징
- **Secondary**: `#3b82f6` (Royal Blue) - 기술과 시스템의 안정성 상징
- **Accent**: `#f97316` (Orange) - 주의 및 경고 알림

### Gradients
- **Primary Gradient**: `linear-gradient(135deg, #4ade80 0%, #3b82f6 100%)`
- **Glass Card Background**: `linear-gradient(145deg, rgba(34, 197, 94, 0.05) 0%, rgba(21, 28, 44, 0.8) 100%)`

---

## typography ✍️

- **Primary Font**: `Pretendard`, sans-serif
  - 한국어 가독성에 최적화된 시스템 폰트.
  - 가변 폰트(Variable Font)를 활용하여 정교한 굵기 조절.
- **Rules**:
  - `word-break: keep-all`: 한글 단어 단위의 자연스러운 줄바꿈 유지.
  - 헤드라인은 `font-extrabold`, 본문은 `font-light` 또는 `font-normal` 사용.

---

## 🧱 UI Components

### 1. Glass Card (`.glass-card`)
유리 질감을 구현한 이지세이프의 대표적인 컨테이너 요소입니다.
- **Properties**:
  - `background`: `rgba(21, 28, 44, 0.6)`
  - `backdrop-filter`: `blur(16px)`
  - `border`: `1px solid rgba(255, 255, 255, 0.08)`
  - `border-radius`: `1.5rem` (24px)
- **Interaction**: 호버 시 `translateY(-8px)` 이동 및 브랜딩 컬러 그림자 강화.

### 2. Ambient Glow
레이아웃의 깊이감을 위해 배경에 배치된 은은한 원형 그라데이션입니다.
- **Primary Glow**: `rgba(34, 197, 94, 0.15)`
- **Secondary Glow**: `rgba(59, 130, 246, 0.1)`

### 3. Text Gradient
중요 수치나 강조 키워드에 적용하여 시선 집중을 유도합니다.
- `background-clip: text` 속성을 활용한 그린-블루 그라데이션.

---

## ✨ Motion & Interaction

### 1. Scroll Revel (Fade-up)
사용자가 스크롤을 내릴 때 콘텐츠가 아래에서 위로 부드럽게 나타나는 효과입니다.
- **Duration**: `0.8s`
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (감각적이고 빠른 반응 후 부드러운 안착)

### 2. Parallax Perspective
히어로 섹션 이미지 등에 적용된 미세한 각도 변화 효과로 입체감을 극대화합니다.
- `rotate-y-12`, `rotate-x-12` 등을 조합한 하이테크 감성.

---

## 🛠️ Design Resources
- **Icons**:
  - `Solar Icon Set`: 핵심 기능 및 도구 표현 (Duotone 선호)
  - `MDI (Material Design Icons)`: 버튼 및 시스템 UI 아이콘
- **Framework**: Tailwind CSS (유틸리티 퍼스트 방식의 효율적 스타일 관리)
