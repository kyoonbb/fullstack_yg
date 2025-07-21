const bcrypt = require('bcrypt');

// 암호화할 텍스트
const textToEncrypt = "안녕하세요! 이것은 암호화될 텍스트입니다.";

// 솔트 라운드 (보안 강도)
const saltRounds = 10;

// CommonJS에서는 async/await를 함수로 감싸야 함
async function encryptText() {
    try {
        // 비동기 암호화
        const hashedText = await bcrypt.hash(textToEncrypt, saltRounds);
        console.log("원본 텍스트:", textToEncrypt);
        console.log("암호화된 텍스트:", hashedText);
        
        // 암호화 검증
        const isValid = await bcrypt.compare(textToEncrypt, hashedText);
        console.log("검증 결과:", isValid);
    } catch (error) {
        console.error("암호화 오류:", error);
    }
}

// 함수 실행
encryptText();