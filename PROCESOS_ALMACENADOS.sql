DELIMITER $$

CREATE PROCEDURE MOSTRAR_PRODUCTOS_DE_UNA_VENTA(IN VENTA_ID INT)
BEGIN
    SELECT * FROM detalle_venta WHERE venta = VENTA_ID;
END $$

DELIMITER ;