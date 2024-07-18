import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Ruan!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Ruan Lima sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Eu sou natural de Alagoas e atualmente residindo em São Paulo, capital. Estou cursando Engenharia de Software, uma área que sempre me fascinou pela constante inovação e desafios intelectuais que proporciona. Tenho uma paixão imensa por aprender coisas novas e estou sempre em busca de conhecimentos que possam agregar à minha formação e desenvolvimento pessoal.
            </p>
            <p className={styles.paragrafo}>
                Antes de ingressar no mundo da tecnologia, trabalhei com instalações elétricas, um ofício que desenvolvi através de um curso técnico que fiz no SENAI Suíço-Brasileiro em São Paulo. Essa experiência me proporcionou uma base sólida em habilidades técnicas e práticas, além de me ensinar a importância da precisão e do cuidado em cada projeto que realizo.            </p>
            <p className={styles.paragrafo}>
                Além do meu interesse profissional, sou um grande entusiasta de games. Os jogos sempre foram uma parte importante da minha vida, não apenas como uma forma de entretenimento, mas também como uma inspiração para a criatividade e resolução de problemas. Fora isso, aprecio muito momentos em família, a tranquilidade da natureza e o encanto das praias.            </p>
            <p className={styles.paragrafo}>
                Decidi mudar de carreira para seguir o caminho do desenvolvimento de software não apenas para realizar um sonho pessoal, mas também para proporcionar um futuro melhor para minha família. Busco não apenas sucesso profissional, mas também mais tempo de qualidade ao lado dos meus entes queridos.            </p>
            <p className={styles.paragrafo}>
                Estou determinado a me tornar um desenvolvedor competente e estou investindo tempo e esforço para alcançar esse objetivo. Estou animado com as oportunidades que essa nova carreira pode oferecer e estou pronto para enfrentar os desafios que surgirem.
            </p>
        </PostModelo>
    )
}