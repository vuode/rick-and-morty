import classNames from 'classnames'
import styles from './Table.module.scss'

interface TableRow extends Record<string, any> {
  id: string | number
}

interface TableColumn<Row extends TableRow> {
  key: string
  title: string
  render: (row: Row) => JSX.Element
  width?: string
}

interface TableProps<Row extends TableRow> {
  data: Row[]
  columns: Array<TableColumn<Row>>
}

type TableComponent = <Row extends TableRow>(
  props: TableProps<Row>,
) => JSX.Element

export const Table: TableComponent = ({ data, columns }) => {
  return (
    <div className={styles.scroll}>
      <table className={classNames(styles.wrapper, styles.wrapperWidth)}>
        <thead>
          <tr className={styles.headerRow}>
            {columns.map(({ key, title, width }) => (
              <th className={styles.headerCell} key={key} style={{ width }}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className={styles.row} key={row.id}>
              {columns.map((column) => (
                <td className={styles.cell} key={column.key}>
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
