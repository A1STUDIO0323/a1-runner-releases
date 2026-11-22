# 예약 동기화 러너 — 릴리스

설치본 자동 업데이트용 저장소입니다 (소스코드 없음).
앱이 이곳의 최신 릴리스를 확인해 자동으로 업데이트합니다.

## 정적 공개 안내 배포

공개 안내는 PROGRAM 계정의 a1-runner-releases Worker에 배포합니다.
wrangler.toml은 PROGRAM 계정 ID와 public/ 자산 폴더를 지정하며 버전 미리보기 주소는 끕니다.
계정 환경 변수 CLOUDFLARE_ACCOUNT_ID 또는 이전 이름 CF_ACCOUNT_ID에 다른 계정이 있으면 배포 전 빌드 관문이 중단합니다.

이미 승인된 PROGRAM 전용 Wrangler 프로필을 사용하고 whoami에서 대상 계정을 확인합니다.
아래 PROGRAM_PROFILE은 해당 PC에 등록된 PROGRAM 프로필명으로 바꿉니다.

    wrangler whoami --profile PROGRAM_PROFILE
    wrangler deploy --config wrangler.toml --profile PROGRAM_PROFILE

로컬 공식 CLI의 무료 배포 경로를 사용하며 새 유료 빌드나 토큰 권한 확대를 이 설정으로 허용하지 않습니다.
현재 안내 주소는 https://a1-runner-releases.a1program0323.workers.dev 입니다.
설치 파일과 앱 자동 업데이트는 기존 GitHub Releases 경로를 계속 사용합니다.
