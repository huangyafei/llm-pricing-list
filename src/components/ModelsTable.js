import React from 'react';
import jsonData from '../data.json';

function ModelsTable() {
  // 将 JSON 数据对象转换为数组，以便映射到表格行
  const dataEntries = Object.entries(jsonData);

  return (
    <div>
      <table className="min-w-full w-full border-gray-200 border dark:border-gray-800">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Model Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Provider</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Input Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Output Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Max Input Tokens</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Max Output Tokens</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Max Tokens</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {dataEntries.map(([modelName, details]) => (
            <tr key={modelName} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{modelName}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{details.litellm_provider}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{details.input_cost_per_token}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{details.output_cost_per_token}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{details.max_input_tokens}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{details.max_output_tokens}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{details.max_tokens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModelsTable;

