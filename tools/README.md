# 콘텐츠 추가 도구

- `check_mid.js` — 중단원 파일(필기·문제·모의고사) 형식 검사: `node tools/check_mid.js m11.js m12.js ...`
- `note_pdf.js` — 필기를 A4 PDF로 출력: 저장소에서 `python3 -m http.server 8765`를 띄운 뒤 `node tools/note_pdf.js 정치 out.pdf`

과목 추가 기준: 중단원마다 필기 + 기본 10 + 실전 10, 모의고사는 학평 스타일 문제로 5회 × 25문항 내외 · 50분 · 100점.
