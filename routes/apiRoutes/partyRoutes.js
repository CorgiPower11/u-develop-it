const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all parties

router.get('/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.return(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Get a single party

router.get('/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Delete a party
router.delete('/party/:id', (req, res) => {
    const sql = `DELETE FROM parties WHERE id =?`;
    const params = [req.params.id];

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: res.message });
            // check if anything was deleted
        } else if (!results.affectedRows) {
            res.json({
                message: 'Party not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: results.affectedRows,
                id: req.params.id
            });
        }
    });
});

module.exports = router;
