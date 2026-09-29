const activities = [
  '좋아하는 음악을 들으며 산책하기',
  '카페에서 읽고 싶었던 책 읽기',
  '집에서 새로운 요리 만들어 보기',
  '친구에게 안부 메시지 보내기',
  '공원에서 하늘 바라보기',
  '방 한 곳 깔끔하게 정리하기',
  '보고 싶었던 영화 한 편 보기',
  '새로운 동네 맛집 찾아가기',
  '사진첩에서 좋아하는 사진 골라보기',
  '가볍게 스트레칭하며 몸 풀기',
];

const recommendButton = document.querySelector('#recommend-button');
const resultTitle = document.querySelector('#result-title');
const resultDescription = document.querySelector('#result-description');

function recommendActivity() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const activity = activities[randomIndex];

  resultTitle.textContent = activity;
  resultTitle.className = 'result-title';
  resultDescription.textContent = '오늘은 이 활동을 가볍게 시작해 보세요.';
}

recommendButton.addEventListener('click', recommendActivity);