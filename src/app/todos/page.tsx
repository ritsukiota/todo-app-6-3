'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: '買い物に行く', completed: false, description: '牛乳とパンを買う' },
    { id: 2, title: '会議資料作成', completed: true, description: '明日のプレゼン用' }
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: newTodoTitle.trim(),
        completed: false
      };
      setTodos([newTodo, ...todos]);
      setNewTodoTitle('');
      setIsFormOpen(false);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              TODO アプリ
            </h1>
            <Link 
              href="/"
              className="text-indigo-600 hover:text-indigo-500"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">TODOリスト</h2>
            <p className="text-gray-600 mt-1">
              タスクを管理して生産性を向上させましょう
            </p>
          </div>
          
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            {isFormOpen ? 'キャンセル' : '新しいTODO'}
          </button>
        </div>

        {/* Add Todo Form */}
        {isFormOpen && (
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">新しいTODOを追加</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="TODOのタイトルを入力"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              />
              <button
                onClick={addTodo}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                追加
              </button>
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-500">TODOがありません</p>
              <p className="text-gray-400 text-sm mt-1">
                「新しいTODO」ボタンをクリックして最初のタスクを作成しましょう
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`bg-white p-4 rounded-lg shadow transition-all duration-200 ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="mt-1 h-4 w-4 text-indigo-600 rounded border-gray-300"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-medium text-sm ${
                        todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
                      }`}
                    >
                      {todo.title}
                    </h3>
                    {todo.description && (
                      <p
                        className={`text-sm mt-1 ${
                          todo.completed ? 'line-through text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {todo.description}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between text-sm text-gray-600">
            <span>総タスク数: {todos.length}</span>
            <span>完了: {todos.filter(t => t.completed).length}</span>
            <span>未完了: {todos.filter(t => !t.completed).length}</span>
          </div>
        </div>
      </main>
    </div>
  );
}