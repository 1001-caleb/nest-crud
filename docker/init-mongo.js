db.createUser({
    user: 'parra',
    pwd: 'mrcaleb7',
    roles: [
        {
            role: 'readWrite',
            db: 'pacientes'
        }
    ]
});
