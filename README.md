# 🪙 Crypto Tracker Challenge

> **Nomad Coders React Master Challenge** > React, TypeScript, 그리고 Redux Toolkit을 활용하여 개발한 암호화폐 트래커 애플리케이션입니다.

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🔗 배포 링크 (Demo)

🚀 **Live Demo:** [https://mogoo-copy.github.io/nc-crypto-tracker-challenge](https://mogoo-copy.github.io/nc-crypto-tracker-challenge)

---

## 🛠️ 기술 스택 (Tech Stack)

이 프로젝트는 최신 React 생태계와 안정적인 TypeScript 환경에서 구축되었습니다.

### **Core & Build**

![React](https://img.shields.io/badge/React_19-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)

### **State Management & Routing**

![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### **Styling & UI**

![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![ApexCharts](https://img.shields.io/badge/ApexCharts-CA2C2A?style=for-the-badge)

---

## ✨ 주요 기능 (Features)

- **암호화폐 목록 조회:** 실시간 인기 암호화폐 리스트를 확인할 수 있습니다.
- **상세 정보 & 차트:** ApexCharts를 활용하여 각 코인의 가격 변동 추이를 시각적으로 제공합니다.
- **상태 관리:** Redux Toolkit을 사용하여 전역 상태를 효율적으로 관리합니다.
- **반응형 디자인:** Styled-components를 활용한 직관적인 UI/UX.

---

## 📡 데이터 출처 (Data Source)

이 프로젝트는 **CoinPaprika API**를 사용하여 실시간 암호화폐 데이터를 제공합니다.

- **API Provider:** [CoinPaprika API](https://api.coinpaprika.com/)

## 🚀 설치 및 실행 방법 (Installation)

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

**1. 레포지토리 클론 (Clone)**

```bash
git clone [https://github.com/mogoo-copy/nc-crypto-tracker-challenge.git](https://github.com/mogoo-copy/nc-crypto-tracker-challenge.git)
cd nc-crypto-tracker-challenge
```

**2. 패키지 설치 (Install Dependencies)**

```bash
npm install
```

**3. 개발 서버 실행 (Run Dev Server)**

```bash
npm run dev
```

**4. 빌드 (Build)**

```bash
npm run build
```

## 📂 프로젝트 구조 (Directory Structure)

```bash
nc-crypto-tracker-challenge/
├── src/
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   ├── routes/          # 페이지 라우팅 컴포넌트 (Router v7)
│   ├── store/           # Redux Toolkit 상태 관리
│   ├── api/             # API 호출 로직
│   ├── App.tsx          # 메인 앱 컴포넌트
│   └── main.tsx         # 진입점 (Entry Point)
├── public/              # 정적 파일
├── index.html           # HTML 템플릿
├── package.json         # 의존성 및 스크립트 관리
└── vite.config.ts       # Vite 설정 파일
```

## 📝 배포 (Deployment)

이 프로젝트는 gh-pages를 통해 배포되었습니다.

```bash
# 배포 명령어
npm run deploy
```
