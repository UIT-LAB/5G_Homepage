import React from 'react';

const Modal = (props) => {
    const { open, onClose, header } = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={onClose}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={onClose}>
              {' '}
              close{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
    );
};

export default Modal;
