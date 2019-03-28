import { getTypes } from '../utils/ua';
import logoImg from '../assets/logo.png';
import styles from './index.css';

export default function() {
  const search = new URLSearchParams(window.location.search);
  const tag = search.get('tag');
  const types = getTypes();
  const downloadUrl =
    types.indexOf('ios') !== -1
      ? `download.html?tag=${tag || 'default'}&td_channelid=ios`
      : `download.html?tag=${tag || 'default'}&td_channelid=android`;
  window.TDAPP.onEvent(tag ? tag : 'default', 'tag');
  return (
    <div className={styles.wrap}>
      <section className={styles.infoWrap}>
        <img className={styles.logo} src={logoImg} />
        <p className={styles.slogan}>问聊-让生活有温度</p>
      </section>
      <section className={styles.downloadWrap}>
        <a href={downloadUrl} className={styles.download}>
          下载
        </a>
      </section>
      <footer className={styles.copyright}>
        <p>深圳问聊科技有限公司</p>
        <p>Shenzhen Wenliao Techonlogy Co.,Ltd.</p>
      </footer>
    </div>
  );
}
