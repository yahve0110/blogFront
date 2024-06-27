import modalReducer, {
    openModal,
    closeModal,
    setContent,
  } from './modalSlice';
  
  interface ModalState {
    isOpen: boolean;
    content: string;
  }
  
  describe('modalSlice', () => {
    const initialState: ModalState = {
      isOpen: false,
      content: "signIn",
    };
  
    it('should handle initial state', () => {
      expect(modalReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should handle openModal action', () => {
      const state = modalReducer(initialState, openModal());
      expect(state.isOpen).toBe(true);
      expect(state.content).toBe("signIn");
    });
  
    it('should handle closeModal action', () => {
      const state = modalReducer(initialState, closeModal());
      expect(state.isOpen).toBe(false);
      expect(state.content).toBe("signIn");
    });
  
    it('should handle setContent action', () => {
      const newContent = "signUp";
      const state = modalReducer(initialState, setContent(newContent));
      expect(state.content).toBe(newContent);
    });
  
    it('should handle setContent action without opening the modal', () => {
      const newContent = "signUp";
      const state = modalReducer(initialState, setContent(newContent));
      expect(state.isOpen).toBe(false);
      expect(state.content).toBe(newContent);
    });
  
    it('should reset content to "signIn" when closeModal is called after setContent', () => {
      const intermediateState = modalReducer(initialState, setContent("signUp"));
      const finalState = modalReducer(intermediateState, closeModal());
      expect(finalState.isOpen).toBe(false);
      expect(finalState.content).toBe("signIn");
    });
  });
  