#### 1.连接远端仓库

* 使用**GitHub** 创建一个仓库 

* 使用`git clone  GitHub远端仓库URL`   克隆下来的项目已经和远端仓库关联

* 将vue 项目的 主要文件  复制到 克隆下来的文件目录中

* 使用git 命令 推送到远端

  * `git add .`		 ` git commit -m 连接远端仓库`		 `git push` 

  * 也可以使用别名的方式自己配置git 连接远端仓库

  * `git remote add origin https://github.com/coderwhy/testmall.git`
  `git push -u origin master`
    
    

#### 2.初始化vue项目

* 使用Vue Cli3 创建项目 `vue create projectName`

* 划分目录结构 

* 使用vue.config.js配置别名

  * ```js
    module.exports = {
      configureWebpack: {
        resolve: {
          alias: {
            'assets': '@/assets',
            'components': '@/components',
            'views': '@/views',
            'common': '@/common',
            'network': '@/network',
          }
        }
      }
    }
    ```

* 添加`.editorconfig`文件  规定代码风格



































