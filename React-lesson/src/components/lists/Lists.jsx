// import styles from '../../styles/global.module.scss';
// export default function Lists({ tasks, handleDone, handleRemove }) {
//   return (
//     <ul>
//       {tasks.map((task) => {
//         return (
//           <li key={task.id}>
//             <p className={task.done ? `${styles.done}` : ''}>{task.name}</p>
//             <div className={styles.ContainerButtons}>
//               <button
//                 className={styles.buttons}
//                 onClick={() => handleDone(task.id)}
//               >
//                 {task.done ? 'Cofnij' : 'Zrobione'}
//               </button>
//               <button
//                 className={styles.buttons}
//                 onClick={() => handleRemove(task)}
//               >
//                 Usuń
//               </button>
//             </div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
