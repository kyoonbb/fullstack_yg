
// // 예제 1 : chakra-ui 첫번째 간단한 예제
// import react, { useEffect, useRef, Suspense } from 'react';
// import '../public/global.css';

// import { Button } from '@chakra-ui/react'; // chakra-ui/react 여기있는 버튼을 불러오는 것

// interface props {};

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <Button>버튼</Button>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 1 끝 : 강사님 녹강에도 아무것도 안뜨더라 : 동작 안함 useContext 오류가 남 Provider조치를 취해야 뜸


// // 예제 2 : 예제 1 까만 버튼을 컬러모드 components/ui/color-mode.tsx에서 다크모드를 라이트모드로 바꾸는걸 보여주는 예제
// import react, { useEffect, useRef, Suspense } from 'react';
// import '../public/global.css';

// import { Button } from '@chakra-ui/react'; // chakra-ui/react 여기있는 버튼을 불러오는 것
// import { useColorMode } from '@/components/ui/color-mode'; // use color-mode 가져오고

// interface props {};

// const appComponent:react.FC<props> = (props:props)=>{
//   const { setColorMode } = useColorMode();
//   setColorMode('dark'); // 이거 light가 라이트모드인거 같은데 뭔가 반대로 된거 같다 , 근데 이건 헷갈리게 왜 역으로 되있는지는 강사님도 의아해 함
//   return <react.Fragment>
//     <Button>버튼</Button>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 2 끝 : 근데 이러면 테일윈드에서 다시 유지보수 하기 번거롭다


// // 예제 3 : 회원가입 예제 과정 1 chakra -> Layout -> Stack -> Vstack
// import react, { useEffect, useRef, Suspense } from 'react';
// import '../public/global.css';
// 
// import { Button, VStack } from '@chakra-ui/react'; // chakra-ui/react 여기있는 버튼을 불러오는 것
// import { useColorMode } from '@/components/ui/color-mode'; // use color-mode 가져오고
// 
// interface props {};
// 
// const appComponent:react.FC<props> = (props:props)=>{
//   const { setColorMode } = useColorMode();
//   setColorMode('light'); 
//   return <react.Fragment> 
//     <VStack>
//       <div className='text-3xl! font-bold!'>회원가입</div> 
//     </VStack>
//   </react.Fragment>
// }; // div => className='text-3xl! font-bold!'>회원가입 여기에 !는 important 걸려있다 ! important : 강제 적용, 덮어쓰기 , 무조건 이거 쓴다 tailwind 겹칠경우 조치하는것 저번에 배움
// 
// export default appComponent;
// // 예제 3 끝 :


// // 예제 4 : 회원가입 예제 과정 2 chakra -> Layout -> Grid -> Griditem? + Input
// import react, { useEffect, useRef, Suspense } from 'react';
// import '../public/global.css';

// import { Button, VStack, Grid, GridItem, Input } from '@chakra-ui/react'; // chakra-ui/react 여기있는 버튼을 불러오는 것
// import { useColorMode } from '@/components/ui/color-mode'; // use color-mode 가져오고

// interface props {};

// const appComponent:react.FC<props> = (props:props)=>{
//   const { setColorMode } = useColorMode();
//   setColorMode('light'); 
//   return <react.Fragment> 
//     <VStack>
//       <div className='text-3xl! font-bold!'>회원가입</div> 
//       <Grid templateColumns='135px 500px'>
//         <GridItem>
//           <label htmlFor='id' className='text-lg! leading-[38px]! text-right! inline-block! w-full! pr-1! mb-2!'>아이디 : </label>
//         </GridItem>
//         <GridItem>
//           <Input id='id'/>
//         </GridItem>
//         <GridItem>
//           <label htmlFor='pw' className='text-lg! leading-[38px]! text-right! inline-block! w-full! pr-1! mb-2!'>비밀번호 : </label>
//         </GridItem>
//         <GridItem>
//           <Input id='pw'/>
//         </GridItem>
//         <GridItem>
//           <label htmlFor='pwr' className='text-lg! leading-[38px]! text-right! inline-block! w-full! pr-1!'>비밀번호 재입력 : </label>
//         </GridItem>
//         <GridItem>
//           <Input id='pwr'/>
//         </GridItem>
//         <GridItem colSpan={2}>
//           <Button w="100%" mt="1.5rem">회원가입</Button>
//         </GridItem>
//       </Grid>
//     </VStack>
//   </react.Fragment>
// }; // div => className='text-3xl! font-bold!'>회원가입 여기에 !는 important 걸려있다 ! important : 강제 적용, 덮어쓰기 , 무조건 이거 쓴다 tailwind 겹칠경우 조치하는것 저번에 배움

// export default appComponent;
// // 예제 4 끝 : 기본 뼈대 만듦


// 예제 5 : 회원가입 예제 과정 3 chakra -> components -> Accordion

import react, { useEffect, useRef, Suspense } from 'react';
import '../public/global.css';

import { Button, VStack, Grid, GridItem, Input, Accordion } from '@chakra-ui/react';
import { useColorMode } from '@/components/ui/color-mode';

interface props {};

const appComponent:react.FC<props> = (props:props)=>{
  const { setColorMode } = useColorMode();
  setColorMode('light');
  return <react.Fragment>
    <VStack>
      <div className='text-3xl! font-bold!'>회원가입</div>
      <Grid templateColumns='135px 500px'>
        <GridItem>
          <label htmlFor='id' className='text-lg! leading-[38px]! text-right! inline-block! w-full! pr-1! mb-2!'>아이디 : </label>
        </GridItem>
        <GridItem>
          <Input id='id'/>
        </GridItem>
        <GridItem>
          <label htmlFor='pw' className='text-lg! leading-[38px]! text-right! inline-block! w-full! pr-1! mb-2!'>비밀번호 : </label>
        </GridItem>
        <GridItem>
          <Input id='pw'/>
        </GridItem>
        <GridItem>
          <label htmlFor='pwr' className='text-lg! leading-[38px]! text-right! inline-block! w-full! pr-1!'>비밀번호 재입력 : </label>
        </GridItem>
        <GridItem>
          <Input id='pwr'/>
        </GridItem>

        <GridItem colSpan={2}>
          <Accordion.Root>
            <Accordion.Item>
              <Accordion.ItemTrigger>
                개인 정보 보안 약관
                <Accordion.ItemIndicator/>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
제1조 (목적)
이 약관(이하 ‘계약’이라 한다.)은 여행사와 관광통역안내사 사이의 권리·의무 등 제반사항을 정함으로써 외국인 관광객에 대한 여행 및 관광통역안내 서비스를 제고하고 당사자간 상호 이익을 도모함에 그 목적이 있다.

제2조 (계약기간)
① 이 계약의 계약기간은
  _______년 _______월 _______일 _______시부터
  _______년 _______월 _______일 _______시까지
  ( _______년 _______개월 또는 _______회)로 한다.
② 여행사와 관광통역안내사는 계약기간 만료 최소 10일전에 상대방에 대하여 계약의 종료일과 갱신여부를 통지하여야 하며, 계약의 종료일과 갱신여부의 통지없이 계약기간이 경과된 때에는 계약은 전과 같은 조건으로 갱신된 것으로 본다.
③ 계약일과 정산일은 고용보험법령에 따른 노무제공일수에 산입한다.
④ 제3항에 따라 계약일과 정산일을 노무제공일수에 산입하는 경우, 당해 계약일과 정산일에 대해서는 관광통역안내사에게 대가를 지급하지 않는다.

제3조 (관광통역안내 위탁 업무의 범위 및 업무 활동 시간)
① 이 계약에 따른 여행사의 관광통역안내사에 대한 위탁 업무의 범위는 다음 각 호와 같다.
  1. 외국인 관광객을 대상으로 한 관광안내
  2. 외국인 관광객의 숙박, 식사, 쇼핑 및 편의 제공에 관한 업무
  3. 기타 행사조건서에 명시된 업무로서 관광통역안내에 부수하는 업무
② 관광통역안내사의 관광통역안내 업무 활동은, 관광일정표 등이 포함된 행사조건서를 전달받은 때부터 시작되며, 관광 일정 중에 사용한 경비 정산 보고서 제출 등 후속조치가 완료되는 시점에 종료한다.
③ 여행사와 관광통역안내사는 행사 조건 내용에 대하여 이견이 있는 경우 상호 협의하여 조정할 수 있다.

제4조 (당사자의 의무)
① 여행사는 관광통역안내사에 대하여 다음 각 호의 의무를 부담한다.
  1. 여행사는 관광통역안내사의 관광통역안내에 관한 업무 배정을 공정하고 성실하게 하여야 한다.
  2. 여행사는 관광통역안내사의 관광통역안내 업무 배정을 위한 일정 관리, 관련 정보(관광일정표, 행사조건서 및 안전관리 등) 등 제반사항을 제공하여야 한다.
  3. 여행사는 관광통역안내사의 관광통역안내 업무 활동에 수반되는 숙박비, 교통비 등을 실비로 지급하여야 한다.
  4. 여행사는 관광통역안내사가 관광통역안내 업무 활동 중에 본인의 고의, 과실 없이 상해가 발생하였을 경우 치료 실비를 지급하여야 한다.
② 관광통역안내사는 여행사에 대하여 다음 각 호의 의무를 부담한다.
  1. 관광통역안내사는 여행사로부터 위탁받은 관광통역안내 업무를 성실하게 이행하여야 하며, 여행사로부터 제공받은 관광일정을 외국인 관광객에게 공지하여야 한다.
  2. 관광통역안내사는 관광통역안내 업무시 욕설을 하거나 역사적인 사실을 잘못 전달하는 등 불성실·태만하거나 여행사의 신용을 훼손하는 행위를 하여서는 아니된다.
  3. 관광통역안내사는 계약기간 중 이 계약의 이행에 중요한 영향을 미치는 관광통역안내 서비스 계약을 다른 사업자와 체결하고자 하는 경우 여행사와 사전에 협의하여야 한다.
  4. 관광통역안내사는 외국인 관광객의 정당한 요구나 불만이 있을 경우 여행사와 합의하에 시정 등 적절한 조치를 취하고 불만의 재발 방지를 위하여 필요한 조치를 취해야 하며, 안전사고 방지에 관한 사항을 수시로 공지하고 긴급상황 발생시에는 사전 조치후 여행사에게 통보하고 사후 협의하여야 한다.  
  5. 관광통역안내사는 여행사로부터 위탁받은 관광통역안내 업무 활동을 종료한 이후, 현장에서 발생한 경비에 대한 사후정산을 신속하고 성실하게 하여야 한다.
 
제5조 (대가 등 지급)
① 관광통역안내 업무에 대한 대가와 이의 지급에 대한 사항은 다음 각 호의 규정에 따라 부속합의서로 정한다.
  1. 여행사는 관광통역안내사의 관광통역안내 업무에 대하여 시간(반일, 전일 등), 시간대(야간, 휴일 등), 경력 등을 감안하여 적정한 대가를 지급한다. 
  2. 관광통역안내 업무에 대한 대가는 원화를 기준으로 하며, 일간․주간․월간 등 단위로 책정한다. 
② 행사 진행비는 관광통역안내 업무 활동이 시작되기 전에 사전 지급함을 원칙으로 한다. 다만, 상호 협의하여 정할 수 있다.
③ 여행사는 관광통역안내사에게 원칙적으로 업무 활동 종료일로부터 30일 이내에 관광통역안내 업무에 대한 대가를 지급하여야 한다. 다만, 다수의 관광통역안내 업무 활동(위탁)을 전제로 하지 아니하고 단발성 관광통역안내 업무 활동(위탁)을 위한 계약의 경우는 정산과 동시에 지급한다.
④ 관광 일정에 포함된 쇼핑상품 및 옵션상품 판매수수료는 여행사가 지급받고, 차후 정산 시 관광통역안내사에게 수익분배에 따라 지급한다.
⑤ 제2항, 제3항 및 제4항에 해당하는 금액은 관광통역안내사 본인의 계좌로 입금한다.

제6조 (수익의 분배)
① 이 계약을 통하여 발생한 수익은 다음 각호에 따라 공정하게 분배·계산한다.
  1. 관광 일정에 포함된 쇼핑상품 및 옵션상품 판매수수료에 대한 수익은 여행사와 관광통역안내사가 첨부될 부속합의서에서 정하는 비율로 분배한다.
  2. 관광 상품에 책정된 팁은 다음과 같이 계산한다.
                                                (상세하게 설명)
  3. 관광통역안내사에게 지급되는 기타 수수료에 대한 수익은 다음과 같이 계산한다.
                                                (상세하게 설명)
② 여행사와 관광통역안내사는 각자의 소득에 대한 세금을 각자 부담한다.

제7조 (금지 행위)
① 여행사는 관광통역안내사에 대하여 다음의 각 호에 해당하는 행위를 하여서는 아니된다.
  1. 쇼핑 및 옵션 상품 판매를 강요하는 행위
  2. 관광버스 기사 또는 현지에서 동행하는 인력에게 지급되는 일당 및 팁 등 부대비용을 지급하도록 강요하는 행위 
  3. 관광 일정 중 관광버스 기사 또는 현지에서 동행하는 인솔자의 성별을 구분하지 아니하고 숙소를 배정하는 행위
  4. 관광통역안내 업무를 배정하는 과정에서 대가를 수수하는 행위
② 관광통역안내사는 여행사에 대하여 다음의 각 호에 해당하는 행위를 하여서는 아니된다.
  1. 관광통역안내 업무 활동 중에 외국인 관광객과 문제가 발생하는 경우 여행사와 사전 협의없이 임의로 업무를 중단하는 행위 
  2. 여행사가 지정한 쇼핑점, 음식점 등 이외에 다른 상점과 거래관계를 형성하여 개인적인 수익을 창출하는 행위
  3. 관광일정을 여행사와 사전 협의 없이 임의로 조정 및 변경하는 행위
  4. 이 계약에 따라 알게 된 여행사의 회의비밀, 영업정보 및 기술정보 등을 유출하는 행위

제8조 (외국인 관광객의 불만과 책임 소재)
① 다음 각 호의 경우 외국인 관광객의 불만은 여행사가 책임을 부담한다.
  1. 관광일정과 관련하여 외국인 관광객의 불만이 발생한 경우
  2. 관광일정표에 포함된 장소 또는 시설에서 제공되는 서비스와 관련하여 외국인 관광객의 불만이 발생한 경우
② 다음 각 호의 경우 외국인 관광객의 불만은 관광통역안내사가 책임을 부담한다. 
  1. 관광통역안내 업무와 관련하여 역사적인 사실을 잘못 전달하거나 욕설 등을 하여 국가 이미지 실추, 서비스 마인드 부족 및 불친절한 태도가 문제가 되어 외국인 관광객의 불만이 발생한 경우
  2. 임의로 외국인 관광객에게 쇼핑 및 옵션 상품 판매를 강요한 경우
  3. 사전협의없이 임의로 관광통역안내 업무를 중단하여 추가적인 비용이 발생하는 경우

제9조 (계약의 해지)
① 여행사 또는 관광통역안내사가 이 계약상의 의무를 위반하는 경우 상당 기간을 정하여 이행 또는 시정을 최고하고 그 이행 또는 시정이 이루어지지 아니하는 경우에는 계약을 해지할 수 있다. 다만, 이 계약의 당사자가 계약의 중요한 의무를 위반하여 더 이상 이 계약을 유지하기가 어려운 경우에는 최고없이 계약을 즉시 해지할 수 있다.
② 계약 해지일을 기준으로 이미 발생한 계약 당사자들의 권리 및 의무에 관한 사항은 이 계약의 해지로 인하여 영향을 받지 않는다.
③ 여행사와 관광통역안내사는 상호 합의하여 계약을 해지할 수 있다.
④ 여행사와 관광통역안내사는 자신의 귀책사유로 인하여 이 계약이 해제, 해지됨으로써 발생한 상대방의 손해 또는 이 계약을 위반하여 발생하는 상대방의 손해를 배상하여야 한다.

제10조 (지연이자) 제5조 제3항에 의하여 대가 지급기간이 경과하는 경우 미지급액에 대하여 지급기간 경과일의 다음날부터 지급하는 날까지 상사법정이율에 따른 지연이자를 지급한다.

제11조 (교육훈련) 여행사와 관광통역안내사는 관광통역안내에 필요한 능력의 습득 및 향상을 위한 교육훈련과 관련된 기회제공 및 참여에 최선을 다한다.

제12조(보험가입) 
① 여행사는 고용보험과 산재보험 관련 법령에 따라 관광통역안내사를 피보험자로 하는 보험 취득신고 등 자격관리 업무를 성실히 수행하여야 한다.
② 여행사는 고용보험과 산재보험 관련 법령에 따라 관광통역안내사가 부담하여야 하는 보험료와 여행사가 부담하여야 하는 보험료를 납부하여야 한다. 이 경우 여행사는 관광통역안내사가 부담하여야 하는 보험료를 고용보험 및 산재보험 관련 법령에 따라 그 관광통역안내사의 보수에서 원천공제하여 납부할 수 있다.

제13조 (관할 법원 등)
① 이 계약에 관한 소송은 민사소송법상의 관할법원에 제기한다.
② 이 계약에서 부속합의서로 정하기로 한 사항, 이 계약의 내용을 보충하거나 이 계약에서 정하지 아니한 사항과 이 계약의 해석에 관하여는 당사자간 합의하여 정하되, 합의가 이루어지지 않은 경우에는 관계법령 및 거래관행에 따른다.

제14조 (계약서 작성)
이 계약의 성립 및 내용을 증명하기 위하여 계약서 2부를 작성하고, 여행사와 관광통역안내사가 서명 날인 후 각 1부씩 보관한다.
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </GridItem>

        <GridItem colSpan={2}>
          <Button w="100%" mt="1.5rem">회원가입</Button>
        </GridItem>
      </Grid>
    </VStack>

    {/* <Button>버튼</Button> */}
  </react.Fragment>
};

export default appComponent;

// 예제 5 끝 : 





