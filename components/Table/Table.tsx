import { formatCurrency } from "@/infrastructure/utils/FormatCurrency";
import { router } from "expo-router";
import { Pressable } from "react-native";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table/index";
import { TableComponentProps } from "@/infrastructure/model/components";

/**
 * TableComponent renders a dynamic table of cryptocurrency data with interactive rows.
 * 
 * @component
 * @description Creates a responsive table displaying cryptocurrency information
 * 
 * @param {TableComponentProps} props - The properties passed to the component
 * @param {string[]} props.array - Table header titles
 * @param {Array} props.data - Cryptocurrency data to be displayed in table rows
 * 
 * @returns {React.JSX.Element} A table view of cryptocurrency data
 * 
 * @example
 * // Render a table with cryptocurrency information
 * <TableComponent 
 *   array={['Rank', 'Name', 'Price']} 
 *   data={cryptoData} 
 * />
 * 
 * @remarks
 * - Supports dynamic header and data rendering
 * - Each row is pressable and navigates to detailed cryptocurrency information
 * - Formats currency values using a utility function
 * - Handles cases where rank might be undefined
 */
const TableComponent = ({ array, data }: TableComponentProps) => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          {array.map((item, index) => (
            <TableHead key={index}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <Pressable
            onPress={() => router.push(`/Information/${item.id}`)}
            key={index}
          >
            <TableRow>
              <TableData>{item.rank || item.id}</TableData>
              <TableData>{item.name}</TableData>
              <TableData className="text-right text-cyan-500">
                ${formatCurrency(item.current_price)}
              </TableData>
            </TableRow>
          </Pressable>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
