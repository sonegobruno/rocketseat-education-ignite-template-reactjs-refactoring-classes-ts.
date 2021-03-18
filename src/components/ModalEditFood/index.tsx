import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalEditFoodProps {
  setIsOpen: () => void;
  isOpen: boolean;
  handleUpdateFood: (data: IFormData) => void;
  editingFood: any;
}

interface IFormData {
  id: number;
  available: boolean;
  description: string;
  image: string;
  name: string;
  price: string;
}

class ModalEditFood extends Component<ModalEditFoodProps, {formRef: any}> {
  constructor(props: ModalEditFoodProps) {
    super(props);

    this.state = {
      formRef: createRef<any>()
    };

  }

  handleSubmit = async (data: IFormData) => {
    const { setIsOpen, handleUpdateFood } = this.props;

    handleUpdateFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen, editingFood } = this.props;
    const { formRef } = this.state;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={this.handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
};

export default ModalEditFood;
