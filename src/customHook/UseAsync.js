import { useReducer, useEffect } from 'react';

// 1. 상태 초기화
const initalState = {
    loading: false,
    data: null,
    error: null
}
// 2. reducer함수 구현 
// 경우의 수 지정 1) 로딩중일 때 'LOADING'
// 2) 데이터를 성공적으로 받을 때 'SUCCESS'
// 3) 에러가 발생했을 때 'ERROR'
function reducer(state, action) {
    switch(action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
            case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
            case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            return state
    }
}

// 요청 관리 함수
// callback자리에는 함수가 들어감
const UseAsync = (callback, deps=[]) => {
    // 상태 관리 
    const [state, dispatch] = useReducer(reducer, initalState);
    // 데이터 요청 함수 
    // 함수 앞에 붙이는 키워드 : async
    const fetchData = async () => {
        // loading의 값을 true로 상태 업데이트 함
        dispatch({type: 'LOADING'});
        // 에러가 발생할 확률이 높은 코드 작성 시 에러 핸들링
        try {
            // axios를 받는 함수가 담김 (각각 다른 주소로 요청한 값들을 callback으로 전달받기 위해)
            const data = await callback(); // 결과 값을 받을 때 까지 기다렸다가 담음
            dispatch({type: 'SUCCESS', data}); // data => data: data 이다.
        }
        catch(e) {
            dispatch({type: 'ERROR', error: e});
        }
    }
    useEffect(() => {
        // Async함수가 마운트 될 때 아래 함수 호출됨
        fetchData();
    }, deps)
    return state; // 그리고 상태 반환됨
};

export default UseAsync;