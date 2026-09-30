const activities = [
  { name: '좋아하는 음악을 들으며 산책하기', people: 'solo', place: 'outdoor', cost: 'free' },
  { name: '카페에서 읽고 싶었던 책 읽기', people: 'solo', place: 'indoor', cost: 'paid' },
  { name: '집에서 새로운 요리 만들어 보기', people: 'solo', place: 'indoor', cost: 'paid' },
  { name: '친구에게 안부 메시지 보내기', people: 'friends', place: 'indoor', cost: 'free' },
  { name: '공원에서 하늘 바라보기', people: 'solo', place: 'outdoor', cost: 'free' },
  { name: '방 한 곳 깔끔하게 정리하기', people: 'solo', place: 'indoor', cost: 'free' },
  { name: '보고 싶었던 영화 한 편 보기', people: 'solo', place: 'indoor', cost: 'paid' },
  { name: '새로운 동네 맛집 찾아가기', people: 'friends', place: 'indoor', cost: 'paid' },
  { name: '사진첩에서 좋아하는 사진 골라보기', people: 'solo', place: 'indoor', cost: 'free' },
  { name: '가볍게 스트레칭하며 몸 풀기', people: 'solo', place: 'indoor', cost: 'free' },
];

const recommendButton = document.querySelector('#recommend-button');
const resultTitle = document.querySelector('#result-title');
const resultDescription = document.querySelector('#result-description');

function getSelectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value;
}

function recommendActivity() {
  const selectedPeople = getSelectedValue('people');
  const selectedPlace = getSelectedValue('place');
  const selectedCost = getSelectedValue('cost');

  const matchingActivities = activities.filter((activity) => {
    return (
      (!selectedPeople || activity.people === selectedPeople) &&
      (!selectedPlace || activity.place === selectedPlace) &&
      (!selectedCost || activity.cost === selectedCost)
    );
  });

  if (matchingActivities.length === 0) {
    resultTitle.textContent = '조건에 맞는 활동이 없어요!';
    resultTitle.className = 'result-title result-title-empty';
    resultDescription.textContent = '조건을 조금 바꿔서 다시 추천받아 보세요.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * matchingActivities.length);
  const activity = matchingActivities[randomIndex];

  resultTitle.textContent = activity.name;
  resultTitle.className = 'result-title';
  resultDescription.textContent = '오늘은 이 활동을 가볍게 시작해 보세요.';
}

recommendButton.addEventListener('click', recommendActivity);