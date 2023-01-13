const abc = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'ñ', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', '1',
    '2', '3', '4', '5', '6', '7', '8',
    '9', '0'
]
export function EncryptPass(pass) {
    const passwordEncripted = Encrypt(pass)
    return passwordEncripted
}
export function DecryptPass(password, hash) {
    const passwordEncripted = Encrypt(password)
    if(hash == passwordEncripted){
        return true
    }else{
        return false
    }
}
function Encrypt(pass) {
    const password = pass.toString()
    const arrayPass = password.split('');
    const newarr = []
    let newPass = ''; 
    arrayPass.map((l)=>{
        const number = abc.indexOf(l)
        const letter = abc[number+5]
        newarr.push(letter)
        newPass = newarr.join('')
    })
    return newPass
}

