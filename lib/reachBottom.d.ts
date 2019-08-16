import React from 'react';
/**
 * useReachBottom 监听用户上拉触底
 * @param {function} callback 上拉触底事件回调
 * @param {number} distance 页面上拉触底事件触发时距页面底部距离，默认100
 */
export declare function useReachBottom(callback: () => void, distance?: number): void;
/**
 * 监听用户上拉触底,组件需要配置onReachBottom， onReachBottomDistance
 * @param {function} onReachBottom 上拉触底事件回调
 * @param {number} onReachBottomDistance 页面上拉触底事件触发时距页面底部距离，默认100px
 */
export declare function injectReachBottom(target: React.ComponentClass): React.ComponentClass<{}, any>;
