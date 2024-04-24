import * as React from "react";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface ColumnFilterProps {
  setSelectedKeys: (selectedKeys: string[]) => void;
  selectedKeys: string[];
  confirm: () => void;
  clearFilters: () => void;
}

const FiltroTexto: React.FC<ColumnFilterProps> = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
}) => {
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Buscar"
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={confirm}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={confirm}
        icon={<SearchOutlined />}
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Buscar
      </Button>
      <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
        Reiniciar
      </Button>
    </div>
  );
};

export default FiltroTexto;
