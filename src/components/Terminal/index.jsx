import styles from './styles.module.scss';
import Image from 'next/image';

export function Terminal() {
  return (
    <main className={styles.terminal}>
      <div className={styles.areaInterna}>
        <h2 className={styles.title}>
          <span className={styles.user}>din@uem</span>: <span className={styles.blue}>~</span>/recepcao_calouros${' '}
          <span className={styles.blue}>cat</span> bem_vindo.txt
        </h2>
        <p className={styles.text}>
          bem-vindo ao site da recepção de calouros da UEM dos cursos de Informática e Ciência da Computação.
        </p>

        <h2 className={styles.title}>
          <span className={styles.user}>din@uem</span>: <span className={styles.blue}>~</span>/recepcao_calouros${' '}
          <span className={styles.blue}>cat</span> link_discord.txt
        </h2>
        <a href="https://discord.gg/5JaS4p4mWJ" target="_blank" rel="noreferrer" className={styles.text}>
          <div className={styles.iconDiscord}>
            <Image src="/images/discord.svg" alt="Discord" />
          </div>
          <span className={styles.link}>https://discord.gg/5JaS4p4mWJ</span>
        </a>

        <h2 className={styles.title}>
          <span className={styles.user}>din@uem</span>: <span className={styles.blue}>~</span>/recepcao_calouros${' '}
          <span className={styles.blue}>cat</span> cronograma.txt
        </h2>

        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Data</th>
              <th>Horário</th>
              <th>Atividade</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td>09/08/21</td>
              <td>18:30</td>
              <td>Apresentação do Departamento</td>
            </tr>
            <tr className={styles.tr}>
              <td>10/08/21</td>
              <td>18:30</td>
              <td>Apresentação das Entidades Internas e Externas</td>
            </tr>
            <tr className={styles.tr}>
              <td>11/08/21</td>
              <td>18:30</td>
              <td>Mesa Redonda</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
