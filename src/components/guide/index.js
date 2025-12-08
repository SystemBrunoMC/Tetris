import React from 'react';
import QRCode from 'qrcode';
import style from './index.less';
import { transform, i18n, lan } from '../../unit/const';
import { isMobile } from '../../unit';

export default class Guide extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: isMobile(),
      QRCode: '',
    };
  }

  componentWillMount() {
    if (this.state.isMobile) return;
    QRCode.toDataURL(location.href, { margin: 1 })
      .then(dataUrl => this.setState({ QRCode: dataUrl }));
  }

  shouldComponentUpdate(state) {
    return state.QRCode !== this.state.QRCode;
  }

  render() {
    if (this.state.isMobile) return null;

    return (
      <div style={{ display: 'block' }}>
        <div className={`${style.guide} ${style.right}`}>
          <div className={style.up}><em style={{ [transform]: 'translate(0,-3px) scale(1,2)' }} /></div>
          <div className={style.left}><em style={{ [transform]: 'translate(-7px,3px) rotate(-90deg) scale(1,2)' }} /></div>
          <div className={style.down}><em style={{ [transform]: 'translate(0,9px) rotate(180deg) scale(1,2)' }} /></div>
          <div className={style.right}><em style={{ [transform]: 'translate(7px,3px) rotate(90deg) scale(1,2)' }} /></div>
        </div>
        <div className={`${style.guide} ${style.left}`}>
          <p>
            <a href="https://github.com/chvin/react-tetris" target="_blank" rel="noopener noreferrer" title={i18n.linkTitle[lan]}>
              {`${i18n.github[lan]}:`}
            </a><br />
          </p>
          <div className={style.space}>SPACE</div>
        </div>
        {this.state.QRCode && (
          <div className={`${style.guide} ${style.qr}`}>
            <img src={this.state.QRCode} alt={i18n.QRCode[lan]} />
          </div>
        )}
      </div>
    );
  }
}