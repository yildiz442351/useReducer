import React, { useReducer } from 'react'
const ReducerCounter = () => {
    /*
     
    *useReducer:state yönetimin useState ile birlikte yönetilmesi
    *zor olduğu durumlarda kullanılır.  
    ! iki parametre ister:
    *1.reducer (fonksiyon):state 'in nasıl değişeceğine karar veren fonksiyon
    *2.initalState:Başlangıç değeri
    */
    const initalState = {
        users: [("test")],
        count: 0,
    };
    /*
    
    ! Aldığı parametler
    *state: state' in değişmeden önceki son hali emir verme işleminde denebilir 
    *action: state 'in nasıl değişeceğini tanımlayan action objesi
    *dispatch: emirleri reducera aktarmaya yarayan aracı emre göre hareket eder.
 
    */
    const reducer = (state, action) => {
        //console.log (action.type);
        //console.log(state.count);
        switch (action.ype) {
            case "ARTTIR":
                return { ...state, count: state.count + 1 };
            case "AZALT":
                return { ...state, count: state.count - 1 }
                case "SIFIRLAMA":
                    return {...state, count:0, users: [{name: "ex"}]};
                    default:
                        return initalState;    
                    }
    };
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <>
            <h1>useReducer ile sayaç</h1>
            <div className="count">
                <button onClick={() => dispatch({ type: "ARTTIR" })}>Arttır</button>
                <span>0</span>
                <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
                <button onClick={() => dispatch({ type: "SIFIRLAMA" })}>Sıfırlama</button>
            </div>
        </>
    );
};

export default ReducerCounter;
