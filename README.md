# 풍산 학습

친구들과 함께 쓰는 과목별 시험 대비 복습 퀴즈 사이트.

## 파일 구조

- `index.html` — 뼈대만 있는 시작 페이지 (아래 파일들을 순서대로 불러옴)
- `css/style.css` — 화면 스타일 전체
- `js/data-passes.js` — 국어 지문형 문제(ETC·STR)와 서술형 데이터
- `js/covers.js` — 과목 표지 이미지(base64)
- `js/app.js` — 앱 동작 전체 (로그인, 풀이, 저장·동기화, 화면 그리기)
- `js/capture-guard.js` — 캡처·복사 방지
- `data/*.js` — 과목별 필기·문제·모의고사 데이터
- `sw.js` — 서비스워커(오프라인·알림)
- `supabase/`, `supabase_setup.sql` — 서버 설정
- `tools/` — 콘텐츠 추가 도구 (`tools/README.md` 참고)

불러오는 순서가 중요해요. `index.html`의 script 순서를 바꾸지 마세요.
