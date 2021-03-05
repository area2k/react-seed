// import { ReactElement } from 'react'

// // type FilterProps<T = any> = {
// //   value: T
// //   onChange: (value: T) => void
// // }

// type Filters = { [key: string]: ReactElement<any> }

// type FilterSet<F extends Filters, K extends keyof F = keyof F> = {
//   filters: F
//   filterSelectDefault?: K
//   filterSelectLabels?: Record<K, string>
//   initialValue?: any
//   label: string
// }

// type FilterSet = {
//   label: string
//   modes: { [key: string]: string }
// }

// // [{ jobsCount: { value: 1, op: 'GREATER_THAN', __typename: 'IntCompareFilter' } }]
// // [{ jobsCountRange: { from: 1, to: 5, inverse: false } }]

// {
//   initialValue: { value: 1, op: 'GREATER_THAN' },
//   initialMode: 'greaterThan',
//   label: 'Jobs count',
//   modes: {
//     equal: 'Is equal to...',
//     greaterThan: 'Is greater than...',
//     lessThan: 'Is less than...',
//     notEqual: 'Is NOT equal to...',
//     range: 'Is between...'
//   },
//   defaultMode: 'equal',
//   render: ({ mode }) => {
//     switch (mode) {
//       case 'range':

//     }
//   }
// }


// // type Filter<V = any> = {
// //   render:
// //   // render: (props: FilterProps<T>) => ReactElement<any>
// // }

// type Props<F extends Filters> = {
//   filters: FilterSet<F>[]
// }

// const Filters = <F extends Filters>({ filters }: Props<F>) => {
//   return (
//     <div>
//       Filters
//     </div>
//   )
// }

// export default Filters
