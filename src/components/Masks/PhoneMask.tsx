import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface PhoneMaskProps {
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
  value?: string;
  error?: boolean;
}

export const PhoneMask = forwardRef<HTMLInputElement, PhoneMaskProps>(
  function PhoneMask(props, ref) {
    const { onChange, name, value, error, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="+38 (000) 000-00-00"
        value={value || "+38 (0"}
        unmask={false}
        lazy={false}
        overwrite={true}
        ref={ref}
        style={{
          color: error ? 'red' : 'white',
        }}
        onAccept={(val: string) =>
          onChange({
            target: { name, value: val }
          })
        }
      />
    );
  }
);
