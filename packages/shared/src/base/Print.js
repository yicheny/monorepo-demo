class Print{
    static _state = true;

    setState(state){
        Print._state = state;
    }

    log(...info){
        if(!Print._state) return null;
        console.log(...info);
    }
}

export const print = new Print();