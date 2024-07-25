import InputMask from 'react-input-mask';
import Input from './Input';

const InputCpf = ({ name, label, onChange, value }) => {
    return (
        <InputMask
            mask="999.999.999-99"
            value={value}
            onChange={onChange}
            name={name}
            maskChar={null}
           
        >
            {(inputProps) => (
                <Input
                    label={label}
                    name={name} 
                    {...inputProps}
                />
            )}
        </InputMask>
    );
};

export default InputCpf;
