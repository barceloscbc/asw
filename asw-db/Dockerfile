FROM oraclelinux:latest
ENV PACKAGE_URL https://repo.mysql.com/yum/mysql-5.7-community/docker/x86_64/mysql-community-server-minimal-5.7.13-1.el7.x86_64.rpm

# Install server
RUN rpmkeys --import http://repo.mysql.com/RPM-GPG-KEY-mysql \
  && yum install -y $PACKAGE_URL \
  && yum install -y libpwquality \
  && rm -rf /var/cache/yum/*
RUN mkdir /docker-entrypoint-initdb.d

VOLUME /var/lib/mysql

COPY scripts /docker-entrypoint-initdb.d

ADD docker-entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
ENV MYSQL_ROOT_PASSWORD=root

ENTRYPOINT ["/entrypoint.sh"]

RUN mysql -uroot -proot < /import.sql &

EXPOSE 3306 33060
CMD ["mysqld"]