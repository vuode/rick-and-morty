import { type Character } from '../../api/characters'
import { Table } from '../Table'
import styles from './CharactersTable.module.scss'

interface CharactersTableProps {
  data: Character[]
}

export const CharactersTable: React.FC<CharactersTableProps> = ({ data }) => {
  return (
    <Table
      columns={[
        {
          key: 'name',
          title: 'Name',
          width: '15rem',
          render: ({ name, species }) => (
            <>
              <div>{name}</div>
              <div className={styles.species}>{species}</div>
            </>
          ),
        },
        {
          key: 'avatar',
          title: 'Avatar',
          width: '5rem',
          render: ({ image }) => <img className={styles.avatar} src={image} />,
        },
        {
          key: 'origin',
          title: 'Origin',
          render: ({ origin }) => <>{origin.name}</>,
        },
        {
          key: 'gender',
          title: 'Gender',
          width: '5rem',
          render: ({ gender }) => <>{gender}</>,
        },
        {
          key: 'status',
          title: 'Status',
          width: '5rem',
          render: ({ status }) => <>{status}</>,
        },
      ]}
      data={data}
    />
  )
}
