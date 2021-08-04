import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.realizacao}>
          <p>realização:</p>
          <div className={styles.images}>
            <img src="/images/logo_pet.svg" alt="Logo PET" />
            <img src="/images/cainfo.png" alt="Logo cainfo" />
            <img src="/images/caccom.png" alt="Logo caccom" />
            <img src="/images/conectadas.png" alt="Logo PET" />
            <img
              className={styles.logoDin}
              src="/images/din.png"
              alt="Logo DIN"
            />
            <img src="/images/UEM.png" alt="Logo UEM" />
          </div>
        </div>
        <div className={styles.sociais}>
          <p>redes socias:</p>
          <div className={styles.links}>
            <div className={styles.pet}>
              <a
                href="http://www.instagram.com/petinfouem"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <img src="/images/instagram.svg" alt="Icone instagram" />
                </div>
                <span>@petinfouem</span>
              </a>
              <a
                href="http://www.facebook.com/petinformaticauem"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconFace}
                    src="/images/facebook.png"
                    alt="Icone facebook"
                  />
                </div>
                <span>@petinformaticauem</span>
              </a>
            </div>
            <div className={styles.din}>
              {/* <a
                href="http://www.instagram.com/uemdin"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <img src="/images/instagram.svg" alt="Icone instagram" />
                </div>
                <span>@dinuem</span>
              </a> */}
              <a
                href="http://www.facebook.com/uemdin"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <img
                    className={styles.iconFace}
                    src="/images/facebook.png"
                    alt="Icone facebook"
                  />
                </div>
                <span>@uemdin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
