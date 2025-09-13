import styles from "./App.module.css";//импортируем стили 
import  { useState } from "react";//появляется сама когда пользуемся хуком

export const App = () => {//сама функция
  const[value,setValue] = useState('')//3.хук с изначально пустой строкой(значения поля value)
  const[list,setList] = useState([])//3.хук с изначально пустым массивом(содержание элементов списка)
  const[error,setError] = useState('')//3.хук с изначально пустой строкой(сообщение об ошибке)
  const windowError = 'Введенное значение должно содержать минимум 4 символа'//в переменную для удобства
  const isValueValid = value.trim().length > 3;//7.проверяем на валидность ,если нет строка 46

  const onAddButtonClick = ()=>{//8.добавляем обработчик второй кнопки 
    if(!isValueValid){//8.если поле не валидное ошибка
      return setError(windowError)
    }
    setList(list =>{//8.т.к. поле валидное добавляем в массив объект с id и value
      const updated = [...list, { id: Date.now(), value }];//8.передаём новый массив 
      console.log(updated)
      return updated//8.запоминаем новый массив с помощью функции 
    })
    setValue('')//8.в дальнейшем отчищаем поля
    setError('')
  }

  const onInputButtonClick = () => {//4.функция для для первой кнопки+повесили обработчикн кнопку 
    const promptValue = prompt('введите значение')//4.запрашиваем значение от пользователя
    if(promptValue===null)return//6.передаём проверку
    if(promptValue.trim().length<=3){//6.проверка 
      setError(windowError)//6.если строка меньше 4х символов ошибка
      return
    }
      setValue(promptValue)//5.передаём новое значение в функцию строка 41
      setError('')//6.если проверка удачная передаём ошибка('')и значение строка выше
  }
  //9.50-60 если в массиве есть хоть один объект то отрисовываем его через список
return(//2.перерисовка верстки из исходника+перенос стилей в JSX
  <div className={styles.app}>
    <h1 className={styles["page-heading"]}>
      Ввод значения
    </h1>
    <p className={styles["no-margin-text"]}>
      Текущее значение <code>value</code>:"<output>{value}</output>"
    </p>
    <div className={styles.error}>{error}</div>
    <div className={styles["buttons-container"]}>
      <button className={styles.button} onClick={onInputButtonClick}>Ввести новое сообщение</button>
      <button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        {list.length>0 ? (
        <ul className={styles.list}>
          {list.map(item=>(
          <li key={item.id} className={styles["list-item"]}>
            {item.value}
          </li>
          ))}
        </ul>
        ):(
        <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        )}
    </div>
  </div>

)}
