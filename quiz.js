const quiz = [
    {qusetion : '세상에 꺼릴 것이 없는 크고 넓은 도덕적 용기를 말하는 이 고사성어는?',
    answer : '호연지기'},
    {qusetion : '어른과 어린이 사이에는 순서와 질서가 있다',
    answer : '장유유서'},
    {qusetion : '둘 중에 하나를 선택하다',
    answer : '양자택일'},
    {qusetion : '깊이 생각해 보지 않고  경솔하게 행동하다',
    answer : '경거망동'},
    {qusetion : '알바니아계 인도 국적의 로마카톨릭교회 수녀이며, 1948년에 선교 수녀회를 창설한 이 인물은 누구일까요?',
    answer : '테레사수녀'},
    {qusetion : '한반도 유사시를 대비하여 매년 봄에 진행하는 한미 연합 군사훈련은 무엇일까요?',
    answer : '키리졸브'},
    {qusetion : '소설 홍길동에서 홍길동이 가난한 사람들을 구제하기 위해 만든 조직의 이름은 무엇일까요?',
    answer : '활빈당'},
    {qusetion : '남의 의견이나 충고를 귀담아 듣지 아니하고, 흘려버리는 태도를 의미하는 이 사자성어는 무엇일까요?',
    answer : '마이동풍'},
    {qusetion : '유럽 14세기에 대유행한 페스트균의 감염에 의해 급성으로 일어나는 공포의 전염병 이름.',
    answer : '흑사병'},
    {qusetion : ' 늙고 쇠약한 부모를 산에다 버렸다고 하는 장례 풍습으로, 효를 강조하는 일부 설화에서 전해 짐.',
    answer : '고려장'},
    {qusetion : '2014년 기준. 세계에서 인구가 두 번째로 많은 국가는 어디일까요?',
    answer : '인도'},
    {qusetion : '1919년 6월 28일 파리 평화회의의 결과로 31개 연합국과 독일이 맺은 강화 조약의 이름은 무엇일까요?',
    answer : '베르사유조약'},
    {qusetion : '옛날에 옷감을 감아서 다듬이질 하는데 쓰였던 이 도구의 이름은 무엇일까요?',
    answer : '홍두깨'},
    {qusetion : '1986년 4월 원자로에서 방사능이 누출되었던 세계 최대 참사의 우크라이나 북부의 옛 도시이름은 무엇일까요?',
    answer : '체르노빌'},
    {qusetion : '세계에서 면적이 가장 작은 나라는 어디일까요?',
    answer : '바티칸시티'},
    {qusetion : '시스템 관리자가 시스템에서 만들어 놓은 보안이 제거된 비밀통로를 말한다. 바이러스의 이동 통로를 의미하는 이 말은',
    answer : '백도어'},
    {qusetion : '스파르타의 왕비인 헬레나를 트로이의 왕자 파리스가 납치하면서 시작된 전쟁의 이름은 무엇일까요?',
    answer : '트로이전쟁'},
    {qusetion : '중국 삼국시대 촉한의 정치가 겸 전략가. 유비에 의해 삼고초려의 예로 초빙되었던 이 인물은 누구일까요?',
    answer : '제갈공명'},
    {qusetion : '일명 수면마취제로 불리며, 전 세계에서 가장 많이 쓰이는 정맥 주사용 마취제인 이것은 무엇일까요?',
    answer : '프로포폴'},
    {qusetion : '가족, 친척, 사회에서 격리돼 홀로 떨어져 살다가 아무도 모르게 홀로 죽어서 오랫동안 시신이 방치된 것을 의미하는 이 죽음은?',
    answer : '고독사'},
    {qusetion : '일이 좀처럼 풀리지 않고 갈수록 꼬이기만 하는 경우에 쓰이는 말로, 가수 DJ DOC의 노래제목에도 쓰인 이 용어는 무엇일까요?',
    answer : '머피의법칙'},
]
let isTrue = true;
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

while(isTrue){
    let randomNumArr = [];
    for (let i=0; i<3; i++) {
      let randomNum = Math.round(Math.random()*21+1);
      if (randomNumArr.indexOf(randomNum) === -1) {
        randomNumArr.push(randomNum)
      }
    }
    
    let answer=[];
    let myanswer=[];
    let count = 0;
    for(let i=0; i<randomNumArr.length; i++){
        sleep(3000);
        answer[i]= prompt(quiz[randomNumArr[i]].qusetion);
        if(answer[i] == quiz[randomNumArr[i]].answer){
            myanswer.push('정답');
        }else{
            myanswer.push('오답');
        }
    }
    
    for(let i = 0; i<myanswer.length; i++){
        if(myanswer[i]=='정답'){
            count++;
            isTrue = false;
        }
    }
    if(count == 0){
        alert('재시험입니다!');
        isTrue = true;
    }else{
        console.log(`내가 맞힌 문제 갯수: ${count}개`)
    }
    
}




