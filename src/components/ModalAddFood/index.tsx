import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalAddFoodProps {
  setIsOpen: () => void;
  isOpen: boolean;
  handleAddFood: (data: IFormData) => void;
}

interface IFormData {
  id: number;
  available: boolean;
  description: string;
  image: string;
  name: string;
  price: string;
}

class ModalAddFood extends Component<ModalAddFoodProps, {formRef: any}> {
  constructor(props: ModalAddFoodProps) {
    super(props);

    this.state = {
      formRef: createRef<any>()
    };

  }

  handleSubmit = async (data: IFormData) => {
    const { setIsOpen, handleAddFood } = this.props;

    handleAddFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen } = this.props;
    const { formRef } = this.state;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={this.handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
};

export default ModalAddFood;
