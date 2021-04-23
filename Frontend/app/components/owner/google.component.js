import SvgGoogle from '../../public/logo.google'
import stylesGoogle from '../../styles/google-style/google.module.css'
export default function Google_Component() {
    return (
        <>
            <button className={stylesGoogle.google}>
                <SvgGoogle className={stylesGoogle.logo}/>
                <h4>Iniciar con google</h4>
            </button>
        </>
    )
}