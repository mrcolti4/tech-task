import { useState, useEffect, useCallback, createContext } from 'react';
import ReactModal from 'react-modal';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const toggleModal = useCallback((modal = null) => setModal(modal), []);

  useEffect(() => {
    if (modal) {
      function handleEscapeKey(event) {
        if (event.code === 'Escape') {
          toggleModal(null);
        }
      }
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
    return;
  }, [toggleModal, modal]);

  return (
    <ModalContext.Provider value={toggleModal}>
      <ReactModal
        shouldFocusAfterRender={false}
        // closeTimeoutMS={50}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        isOpen={!!modal}
        onRequestClose={() => {
          toggleModal();
        }}
        className="content"
        overlayClassName="overlay"
      >
        {modal}
      </ReactModal>

      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
