
    let total = []
    let episode =[]
    let joinString = []
    let show = document.querySelector('div[class="display"]')
    let oC=0    // operator count (+ - * /)
    let dC=0    // decimal dot count ( . )
    let eC=0    // equal count (=)
    let zC=0    // zero count

    let write = function(){
    joinString=episode.join('')
    show.textContent=joinString
    }
    let clear = function(){
    total =[]
    episode=[]
    }
    
    let calc = function(){
        show.textContent=total.flat().join('').split(' ')
        let buf = total.flat().join('').split(' ')
        let first = buf[0]
        for( i=1; i<buf.length; i+=2){
            if (buf[i]=='+'){
                first = (parseFloat(first)+parseFloat(buf[i+1]))}
            if (buf[i]=='-')
                {first = (parseFloat(first)-parseFloat(buf[i+1]))}
            if (buf[i]=='x')
                {first = (parseFloat(first)*parseFloat(buf[i+1]))}
            if (buf[i]=='/')
                {first = (parseFloat(first)/parseFloat(buf[i+1]))}
    } show.textContent=first}

    document.querySelector("div[class$='plus']").addEventListener("click", function(){if(episode.length==0){return}
     if(oC==0){oC++; dC=0; total.push(episode.flat().join('')); episode=[' + ']; write()} episode=[' + ']; write(); eC=0})
    document.querySelector("div[class$='minus']").addEventListener("click", function(){if(episode.length==0){return}
     if(oC==0){oC++; dC=0; total.push(episode.flat().join('')); episode=[' - ']; write()} episode=[' - ']; write(); eC=0})
    document.querySelector("div[class$='multiply']").addEventListener("click", function(){if(episode.length==0){return}
     if(oC==0){oC++; dC=0; total.push(episode.flat().join('')); episode=[' x ']; write()} episode=[' x ']; write(); eC=0})
    document.querySelector("div[class$='divide']").addEventListener("click", function(){if(episode.length==0){return}
     if(oC==0){oC++; dC=0; total.push(episode.flat().join('')); episode=[' / ']; write()} episode=[' / ']; write(); eC=0})
    document.querySelector("div[class$='equal']").addEventListener("click", function(){if(episode.length==0){return}
     if(oC==0){oC++; dC=0; eC++; total.push(episode.flat().join('')); calc(); return}; eC++; calc(); })
    document.querySelector("div[class$='0']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('0'); write(); oC=0; return} else if (episode.join('')== '0' || episode.join('')==' + 0' 
     || episode.join('')==' - 0' || episode.join('')==' x 0' || episode.join('')==' / 0'){return}; episode.push('0'); write(); oC=0})
    document.querySelector("div[class$='1']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('1'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',1]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',1]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',1]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',1]; write(); return}; if (episode.join('')== '0'){episode=['1']; write(); return};
     episode.push('1'); write(); oC=0})
    document.querySelector("div[class$='2']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('2'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',2]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',2]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',2]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',2]; write(); return}; if (episode.join('')== '0'){episode=['2']; write(); return};
     episode.push('2'); write(); oC=0})
    document.querySelector("div[class$='3']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('3'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',3]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',3]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',3]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',3]; write(); return}; if (episode.join('')== '0'){episode=['3']; write(); return}; 
     episode.push('3'); write(); oC=0})
    document.querySelector("div[class$='4']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('4'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',4]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',4]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',4]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',4]; write(); return}; if (episode.join('')== '0'){episode=['4']; write(); return};
     episode.push('4'); write(); oC=0})
    document.querySelector("div[class$='5']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('5'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',5]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',5]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',5]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',5]; write(); return}; if (episode.join('')== '0'){episode=['5']; write(); return};
     episode.push('5'); write(); oC=0})
    document.querySelector("div[class$='6']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('6'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',6]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',6]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',6]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',6]; write(); return}; if (episode.join('')== '0'){episode=['6']; write(); return};
     episode.push('6'); write(); oC=0})
    document.querySelector("div[class$='7']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('7'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',7]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',7]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',7]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',7]; write(); return}; if (episode.join('')== '0'){episode=['7']; write(); return};
     episode.push('7'); write(); oC=0})
    document.querySelector("div[class$='8']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('8'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',8]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',8]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',8]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',8]; write(); return}; if (episode.join('')== '0'){episode=['8']; write(); return};
     episode.push('8'); write(); oC=0})
    document.querySelector("div[class$='9']").addEventListener("click", function(){
     if (eC>0){clear(); eC=0; episode.push('9'); write(); oC=0; return}; if (episode.join('')== ' + 0'){episode=[' + ',9]; write(); return};
     if (episode.join('')== ' - 0'){episode=[' - ',9]; write(); return}; if (episode.join('')== ' x 0'){episode=[' x ',9]; write(); return};
     if (episode.join('')== ' / 0'){episode=[' / ',9]; write(); return}; if (episode.join('')== '0'){episode=['9']; write(); return};
     episode.push('9'); write(); oC=0})
    document.querySelector("div[class$='dot']").addEventListener("click", function(){
     if (dC==0){dC++; if (isNaN(episode[episode.length-1])) {episode.push('0.'); write(); oC=0; return} episode.push('.'); write(); oC=0}})
    
    document.querySelector("div[class$='clear']").addEventListener("click", function(){clear(); show.textContent=0; oC=0; dC=0})
     


