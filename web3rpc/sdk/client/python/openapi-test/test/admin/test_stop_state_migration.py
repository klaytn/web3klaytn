from base.testing import KlaytnBaseTesting


class TestAdminStopStateMigration(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.stop_state_migration()
        self.assertResponseSuccess()
