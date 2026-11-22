// 정적 안내의 PROGRAM 계정 배포 관문. 자격이나 원문 로그는 읽지 않는다.
const PROGRAM_ACCOUNT_ID = "00d53ba40cf4b924b0f9498d93882e40";

for (const name of ["CLOUDFLARE_ACCOUNT_ID", "CF_ACCOUNT_ID"]) {
  const value = process.env[name];
  if (value !== undefined && value !== "" && value !== PROGRAM_ACCOUNT_ID) {
    console.error("E_PROGRAM_ACCOUNT_OVERRIDE: PROGRAM과 다른 계정 환경 변수가 있어 배포를 중단합니다.");
    process.exit(1);
  }
}

console.log("PROGRAM 정적 안내 배포 계정 확인 완료");
