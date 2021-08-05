import styles from './styles.module.scss';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.realizacao}>
          <p>realização:</p>
          <div className={styles.images}>
            <Image src="/images/logo_pet.svg" alt="Logo PET" />
            <Image src="/images/cainfo.png" alt="Logo cainfo" />
            <Image src="/images/caccom.png" alt="Logo caccom" />
            <Image src="/images/conectadas.png" alt="Logo PET" />
            <Image className={styles.logoDin} src="/images/din.png" alt="Logo DIN" />
            <Image src="/images/UEM.png" alt="Logo UEM" />
          </div>
        </div>
        <div className={styles.sociais}>
          <p>redes socias:</p>
          <div className={styles.links}>
            <div className={styles.pet}>
              <a href="http://www.instagram.com/petinfouem" rel="noreferrer" target="_blank" className={styles.insta}>
                <div className={styles.icon}>
                  <Image src="/images/instagram.svg" alt="Icone instagram" />
                </div>
                <span>@petinfouem</span>
              </a>
              <a
                href="http://www.facebook.com/petinformaticauem"
                rel="noreferrer"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <Image className={styles.iconFace} src="/images/facebook.png" alt="Icone facebook" />
                </div>
                <span>@petinformaticauem</span>
              </a>
            </div>
            <div className={styles.din}>
              <a href="http://www.facebook.com/uemdin" rel="noreferrer" target="_blank" className={styles.face}>
                <div className={styles.icon}>
                  <Image className={styles.iconFace} src="/images/facebook.png" alt="Icone facebook" />
                </div>
                <span>@uemdin</span>
              </a>
            </div>
            <div className={styles.cainfo}>
              <a href="http://www.instagram.com/cainfouem" rel="noreferrer" target="_blank" className={styles.insta}>
                <div className={styles.icon}>
                  <Image src="/images/instagram.svg" alt="Icone instagram" />
                </div>
                <span>@cainfouem</span>
              </a>
              <a href="http://www.facebook.com/cainfouem" rel="noreferrer" target="_blank" className={styles.face}>
                <div className={styles.icon}>
                  <Image className={styles.iconFace} src="/images/facebook.png" alt="Icone facebook" />
                </div>
                <span>@cainfouem</span>
              </a>
            </div>
            <div className={styles.caccom}>
              <a href="http://www.instagram.com/caccomuem" rel="noreferrer" target="_blank" className={styles.insta}>
                <div className={styles.icon}>
                  <Image src="/images/instagram.svg" alt="Icone instagram" />
                </div>
                <span>@caccomuem</span>
              </a>
              <a href="http://www.facebook.com/caccomuem" rel="noreferrer" target="_blank" className={styles.face}>
                <div className={styles.icon}>
                  <Image className={styles.iconFace} src="/images/facebook.png" alt="Icone facebook" />
                </div>
                <span>@caccomuem</span>
              </a>
            </div>
            <div className={styles.conectadas}>
              <a
                href="http://www.instagram.com/conectadasuem"
                rel="noreferrer"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <Image src="/images/instagram.svg" alt="Icone instagram" />
                </div>
                <span>@conectadasuem</span>
              </a>
              <a href="http://www.facebook.com/conectadasuem" rel="noreferrer" target="_blank" className={styles.face}>
                <div className={styles.icon}>
                  <Image className={styles.iconFace} src="/images/facebook.png" alt="Icone facebook" />
                </div>
                <span>@conectadasuem</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
